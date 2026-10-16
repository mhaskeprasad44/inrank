const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Desktop Nav regex
const desktopNavRegex = /<a href="#\/blog" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors font-semibold text-primary">Blog<\/a>\s*<a href="#faq" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors">FAQ<\/a>\s*<a href="#contact" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors">Contact<\/a>/;

const newDesktop = `<a href="/pricing.html" class="text-sm font-bold text-amber-600 hover:text-amber-500 transition-colors">Pricing</a>
            <a href="#/blog" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors font-semibold text-primary">Blog</a>
            <a href="#faq" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="/contact.html" class="text-sm font-medium text-muted-foreground hover:text-foreground hover:text-primary transition-colors">Contact</a>`;

if (desktopNavRegex.test(html)) {
  html = html.replace(desktopNavRegex, newDesktop);
  console.log('Successfully updated desktop nav!');
} else {
  console.log('Regex did not match desktop nav');
}

// Also update the Book Call button to point to /contact.html
const bookCallRegex = /<a href="#contact" class="hidden sm:inline-flex h-10 items-center justify-center font-semibold text-xs border border-border bg-white dark:bg-card text-foreground hover:bg-emerald-600 hover:text-white hover:border-emerald-600 rounded-lg px-5 transition-all duration-200 shadow-sm active:scale-\[0\.98\] cursor-pointer">\s*Book Call\s*<\/a>/;

const newBookCall = `<a href="/contact.html" class="hidden sm:inline-flex h-10 items-center justify-center font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg px-5 transition-all duration-200 shadow-sm shadow-amber-500/20 active:scale-[0.98] cursor-pointer">
              Contact &amp; Audit
            </a>`;

if (bookCallRegex.test(html)) {
  html = html.replace(bookCallRegex, newBookCall);
  console.log('Successfully updated Book Call CTA button to /contact.html!');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('Done!');
