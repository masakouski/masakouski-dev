/** @type {import('next').NextConfig} */
const nextConfig = {
  // Полностью статическая сборка: результат кладётся в out/, сервер не нужен.
  // Следствия: нет server actions, route handlers, middleware и ISR.
  output: 'export',

  // Оптимизатор картинок работает только на сервере, которого у нас нет.
  // Картинки готовим заранее (webp/avif) и кладём в public/.
  images: { unoptimized: true },

  // /page/ вместо /page.html — так статические хосты отдают чище.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
