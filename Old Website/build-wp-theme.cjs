const fs = require('fs');
const path = require('path');

const THEME_DIR = './inrank-theme';
if (!fs.existsSync(THEME_DIR)) {
  fs.mkdirSync(THEME_DIR, { recursive: true });
}
if (!fs.existsSync(path.join(THEME_DIR, 'assets'))) {
  fs.mkdirSync(path.join(THEME_DIR, 'assets'));
  fs.mkdirSync(path.join(THEME_DIR, 'assets', 'css'));
  fs.mkdirSync(path.join(THEME_DIR, 'assets', 'js'));
}

// 1. Copy built assets
const distCssDir = './dist/assets';
const files = fs.readdirSync(distCssDir);
let cssFile = '';
let jsFile = '';
for (const file of files) {
  if (file.endsWith('.css')) cssFile = file;
  if (file.endsWith('.js')) jsFile = file;
}

if (cssFile) fs.copyFileSync(path.join(distCssDir, cssFile), path.join(THEME_DIR, 'assets', 'css', 'main.css'));
if (jsFile) fs.copyFileSync(path.join(distCssDir, jsFile), path.join(THEME_DIR, 'assets', 'js', 'main.js'));

// 2. style.css (Theme header)
const styleCss = `/*
Theme Name: Inrank Theme
Theme URI: https://inrank.in
Author: Inrank
Author URI: https://inrank.in
Description: Custom WordPress theme for Inrank SEO & Growth Suite.
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: inrank
Tags: custom, tailwindcss, elementor
*/
`;
fs.writeFileSync(path.join(THEME_DIR, 'style.css'), styleCss);

// 3. functions.php
const functionsPhp = `<?php
/**
 * Inrank Theme functions and definitions
 */

if ( ! defined( 'INRANK_VERSION' ) ) {
	define( 'INRANK_VERSION', '1.0.0' );
}

function inrank_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
}
add_action( 'after_setup_theme', 'inrank_setup' );

function inrank_scripts() {
	// Enqueue main CSS
	wp_enqueue_style( 'inrank-main-style', get_template_directory_uri() . '/assets/css/main.css', array(), INRANK_VERSION );
	
	// Enqueue Lucide Icons
	wp_enqueue_script( 'lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, false );

	// Enqueue main JS
	wp_enqueue_script( 'inrank-main-js', get_template_directory_uri() . '/assets/js/main.js', array(), INRANK_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'inrank_scripts' );

// Add custom body classes if needed
function inrank_body_classes( $classes ) {
	$classes[] = 'bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary max-w-full overflow-x-hidden font-sans dark';
	return $classes;
}
add_filter( 'body_class', 'inrank_body_classes' );

// Add module type to Vite compiled JS
function inrank_add_type_attribute($tag, $handle, $src) {
	if ( 'inrank-main-js' !== $handle ) {
		return $tag;
	}
	return '<script type="module" src="' . esc_url( $src ) . '"></script>';
}
add_filter( 'script_loader_tag', 'inrank_add_type_attribute', 10, 3 );
`;
fs.writeFileSync(path.join(THEME_DIR, 'functions.php'), functionsPhp);

// 4. index.php (fallback)
fs.writeFileSync(path.join(THEME_DIR, 'index.php'), `<?php
get_header(); ?>
<main class="flex-grow pt-32">
    <div class="container mx-auto px-4">
        <?php
        if ( have_posts() ) :
            while ( have_posts() ) : the_post();
                the_content();
            endwhile;
        endif;
        ?>
    </div>
</main>
<?php get_footer();
`);

// Extract header and footer from index.html
const indexHtml = fs.readFileSync('./index.html', 'utf-8');

const headMatch = indexHtml.match(/<head>([\s\S]*?)<\/head>/i);
const headContent = headMatch ? headMatch[1].replace(/<link rel="stylesheet".*?>/g, '').replace(/<script type="module".*?>/g, '') : '';

const headerMatch = indexHtml.match(/<header id="site-header"[\s\S]*?<\/header>/i);
const headerContent = headerMatch ? headerMatch[0] : '';

const footerMatch = indexHtml.match(/<footer id="site-footer"[\s\S]*?<\/footer>/i);
const footerContent = footerMatch ? footerMatch[0] : '';

// header.php
const headerPhp = `<!doctype html>
<html <?php language_attributes(); ?> class="dark">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
    <!-- Extracted tags from original HTML -->
    ${headContent.replace(/<title>.*?<\/title>/i, '')}
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="root" class="min-h-screen flex flex-col">
    ${headerContent}
`;
fs.writeFileSync(path.join(THEME_DIR, 'header.php'), headerPhp);

// footer.php
const footerPhp = `    ${footerContent}
</div><!-- #root -->
<script>
    if(typeof window.lucide !== 'undefined') {
		window.lucide.createIcons();
	}
</script>
<?php wp_footer(); ?>
</body>
</html>
`;
fs.writeFileSync(path.join(THEME_DIR, 'footer.php'), footerPhp);

// Create Page Templates from extracted elementor-pages
const pagesDir = './elementor-pages';
if(fs.existsSync(pagesDir)) {
	const pageFiles = fs.readdirSync(pagesDir);
	for (const file of pageFiles) {
		if(!file.endsWith('.html')) continue;
		
		const name = file.replace('.html', '');
		let templateName = name.charAt(0).toUpperCase() + name.slice(1);
		if(name === 'home') templateName = 'Home';
		
		const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
		
		// extract between <main class="flex-grow"> and </main>
		const mainMatch = content.match(/<main class="flex-grow">([\s\S]*?)<\/main>/);
		const innerContent = mainMatch ? mainMatch[1] : content;
		
		let phpFileContent = `<?php
/**
 * Template Name: ${templateName} Page
 */
get_header(); ?>

<main id="primary" class="site-main flex-grow">
	<!-- Page Content from Static HTML -->
	<div id="main-sections">
		${innerContent}
	</div>
	
	<!-- Output any dynamic content if user edits via WP editor / Elementor -->
	<div class="elementor-content-fallback">
		<?php
		while ( have_posts() ) :
			the_post();
			the_content();
		endwhile; // End of the loop.
		?>
	</div>
</main><!-- #main -->

<?php get_footer(); ?>
`;

		let targetFilename = `page-${name}.php`;
		if (name === 'home') {
			targetFilename = 'front-page.php';
		}
		
		fs.writeFileSync(path.join(THEME_DIR, targetFilename), phpFileContent);
	}
}

console.log('WordPress theme successfully created at ./inrank-theme');
