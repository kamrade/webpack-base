* Webpack base config workflow
Denis Mikhailov

*** v.1.0.0
- Sass support
- Pug support
- dev and prod mode toggling
- webpack-dev-server, HMR, live-reload support
- custom server (without live-reload) support

- Babel Loader
- Rearrange webpack config for build and development

- Jade/pug templates live-reloading
- Make different build modes. One for prod, other for development
- 


*** Todo:
- 

*** Issues:
- Hot module replacement now works only with styles as I can see
- Jade templates live reloading now, but not HMR
- В dev-mode папка dist удаляется даже если отключить плагин CleanWebpackPlugin
- При разработке на dev-server, source-maps не отрабатывают