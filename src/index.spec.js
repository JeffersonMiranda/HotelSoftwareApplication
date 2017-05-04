const context = require.context('./scripts', true, /\.(js|ts|tsx)$/);
context.keys().forEach(context);
