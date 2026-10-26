import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2020',
      minify: 'esbuild' as const,
      cssCodeSplit: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          homepage2: path.resolve(__dirname, 'homepage-2.html'),
          homepage3: path.resolve(__dirname, 'homepage-3.html'),
          pricing: path.resolve(__dirname, 'pricing.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          justdialProfile: path.resolve(__dirname, 'justdial-profile.html'),
          gbpBlueprint: path.resolve(__dirname, 'google-business-profile-top3.html'),
          webDesignPune: path.resolve(__dirname, 'website-design-company-in-pune.html'),
          digitalMarketingPune: path.resolve(__dirname, 'digital-marketing-agency-in-pune.html'),
          portfolio: path.resolve(__dirname, 'portfolio.html'),
          ourWork: path.resolve(__dirname, 'our-work.html'),
          caseStudies: path.resolve(__dirname, 'case-studies.html'),
          ourWorkCytos: path.resolve(__dirname, 'our-work/cytos.html'),
          ourWorkFludio: path.resolve(__dirname, 'our-work/fludio.html'),
          ourWorkHiragrafix: path.resolve(__dirname, 'our-work/hiragrafix.html'),
          ourWorkGreytothegreen: path.resolve(__dirname, 'our-work/greytothegreen.html'),
          ourWorkVasroventures: path.resolve(__dirname, 'our-work/vasroventures.html'),
          ourWorkHcpnest: path.resolve(__dirname, 'our-work/hcpnest.html'),
          ourWorkRiituinstitution: path.resolve(__dirname, 'our-work/riituinstitution.html'),
          ourWorkShetkarifoodstuff: path.resolve(__dirname, 'our-work/shetkarifoodstuff.html'),
          ourWorkOrthopedicanklefootspecialist: path.resolve(__dirname, 'our-work/orthopedicanklefootspecialist.html'),
          ourWorkDravyafinancial: path.resolve(__dirname, 'our-work/dravyafinancial.html'),
          caseStudyCytos: path.resolve(__dirname, 'case-studies/cytos.html'),
          caseStudyFludio: path.resolve(__dirname, 'case-studies/fludio.html'),
          caseStudyHiragrafix: path.resolve(__dirname, 'case-studies/hiragrafix.html'),
          caseStudyGreytothegreen: path.resolve(__dirname, 'case-studies/greytothegreen.html'),
          caseStudyVasroventures: path.resolve(__dirname, 'case-studies/vasroventures.html'),
          caseStudyHcpnest: path.resolve(__dirname, 'case-studies/hcpnest.html'),
          caseStudyRiituinstitution: path.resolve(__dirname, 'case-studies/riituinstitution.html'),
          caseStudyShetkarifoodstuff: path.resolve(__dirname, 'case-studies/shetkarifoodstuff.html'),
          caseStudyOrthopedicanklefootspecialist: path.resolve(__dirname, 'case-studies/orthopedicanklefootspecialist.html'),
          caseStudyDravyafinancial: path.resolve(__dirname, 'case-studies/dravyafinancial.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
