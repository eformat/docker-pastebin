{

  "host": "0.0.0.0",
  "port": 80,

  "keyLength": 3,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "error",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "storage": {
    "type": "file",
    "path": "./data"
  },

  "documents": {
    "about": "./about.md"
  }

}