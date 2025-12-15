const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// As URLs do seu site
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/marcas/', changefreq: 'monthly', priority: 0.8 },
  { url: '/quem-somos/', changefreq: 'monthly', priority: 0.8 },
  { url: '/conheca/', changefreq: 'monthly', priority: 0.8 },
  { url: '/nossa-cultura/', changefreq: 'monthly', priority: 0.8 },
  { url: '/carreiras/', changefreq: 'monthly', priority: 0.8 },
  { url: '/politicas/', changefreq: 'monthly', priority: 0.7 },
  { url: '/contato/', changefreq: 'monthly', priority: 0.5 },
];

// URL base do seu site
const hostname = 'https://www.seusite.com';

// Cria um stream para o sitemap
const sitemapStream = new SitemapStream({ hostname });

// O caminho para salvar o arquivo sitemap.xml
const outputPath = './public/sitemap.xml';
const writeStream = createWriteStream(outputPath);

// Escreve o stream para o arquivo
sitemapStream.pipe(writeStream);

// Adiciona as URLs ao stream
links.forEach(link => {
  sitemapStream.write(link);
});

// Finaliza o stream
sitemapStream.end();

// Aguarda a finalização da escrita e exibe uma mensagem
writeStream.on('finish', () => {
  console.log('Sitemap gerado com sucesso em ./public/sitemap.xml');
});

writeStream.on('error', (err) => {
  console.error('Erro ao gerar sitemap:', err);
});
