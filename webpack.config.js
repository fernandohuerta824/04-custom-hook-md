import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.resolve();

export default {
  // Punto de entrada de la aplicación
  entry: './src/index.js',

  // Configuración de salida (output)
  output: {
    path: path.resolve(__dirname, 'dist'),   // Ruta de salida donde se generará el archivo final
    filename: 'bundle.js',                  // Nombre del archivo empaquetado
  },

  // Modo de configuración: 'development' para desarrollo, 'production' para producción
  mode: 'development',

  // Configuración de los módulos
  module: {
    rules: [
      // Transpila los archivos JS y JSX usando Babel
      {
        test: /\.js$|\.jsx$/,  // Aplica esta regla a los archivos .js y .jsx
        exclude: /node_modules/, // Excluye node_modules para no procesar dependencias externas
        use: {
          loader: 'babel-loader',  // Usa babel-loader para transpilar el código
        },
      },
      // Carga archivos CSS
      {
        test: /\.css$/,  // Aplica esta regla a los archivos .css
        use: ['style-loader', 'css-loader'],  // Usa style-loader y css-loader para importar los estilos
      },
      // Carga imágenes (JPG, PNG, GIF, SVG, etc.)
      {
        test: /\.(png|jpg|gif|svg)$/,  // Aplica esta regla a los archivos de imagen
        use: [
          {
            loader: 'file-loader',  // Usa file-loader para mover las imágenes al directorio dist
            options: {
              name: '[name].[hash].[ext]',  // Da un nombre único a cada archivo (usando un hash)
              outputPath: 'images/',  // Guarda las imágenes en la carpeta "images" dentro de dist
            },
          },
        ],
      },
    ],
  },

  // Plugins para mejorar el proceso de desarrollo y construcción
  plugins: [
    // Plugin para generar un archivo HTML que incluirá el bundle JS
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Usa el archivo HTML en public como plantilla
    }),
  ],

  // Configuración del servidor de desarrollo
  devServer: {
    static: './dist',  // Define la carpeta 'dist' como origen de los archivos estáticos
    hot: true,         // Habilita Hot Module Replacement para recargar la app en vivo
    open: true,        // Abre automáticamente el navegador al iniciar el servidor
  },
};
