const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV3ZKiSBZ+l7zVbiUBQSMqYgHxpxRKRKVkdy8SSH6UPzMTETvqIeYBOvoF5mJv5636ESYoq8Le3ZmeGrjg5A/nfOecL7/8AvIioXiBGzD6AkqSnBHDrcmaEoMRUKswxAR0QYAYAiOgLWfKdRnEw1MQDJDh6XJzDHdqT3cb31kfO2Qu7+SQS88z+QG8dEFZeWni/8RhMa9d2936vCXo1G3KZmGxxdkYxmNoKKs03tBJZ1Up1exgPICX1iNKSJJHehnjDBOULnCzQgn5GPzFYiAZoqg1lcrxcMVPrdVQ85wjmceSasWWO+9MjIWk5ZnxMfih5FimRJ93oXjdqSZtlsTcBryfjn3eENNBBfdB+jSoK/4NPk2iHAfzAOcsYc3H6674zok+LWMI6TqWpN2pl3nbrbSfwoXJ05Wvng7KofB17vgx4Mzqp5Me29jjC1+Og80+lshuEHboICLBZezbFqdeVuutN6t/BL4i71w5/p26N2ZPbK7rzcpjsbhR0/1qvRSgnGpK3/TGk72urB8zJ4HjPv0YfGc/tJ0ZLHbJSU70tbsQp6Tp2PXj3h7mtYFqccLNSdjznfkdPmIV+RnK+KyaM9X104gTK9eLHh+tRaoK691Gb6S1nprC1KJR0K8NUfKCZhjrHL2U+3ihb+L9UDxZtL5CtpWqeoKpeL7Md96zEj28ZnTEzTwAI+6lCwiOEsoIYkmRt3NQgF2AgrONfYLZa3lBOFjqtTpJZ1Po7KF5CNP1TC5YrF8cWMsbi5WyK8QD3+zsH0AXlKTwMaU4mCWUFaQxMKUowhSM/vnaqTZpgrOC4cckACMwFCQBQshzA/kf9HMdI0ZRWX7OMQNdEJIiMzAYMVLhLrjt74uSpE8kHWqcrmqa2pd0bqyJkFMFVYN8m2F2i7lJMkwZykow4iReEARBhNLLv7sgxxd2o0+bNM91QZgQyrZ5VaYFCt659b6IfL+ocmY3ua+1BiZg1L9PY8aSPKJtYlWOiB8nZ6y1eYBRiFKKX7ogwOfEx60/4DTDZ2hvZxZ9YseKBU4YlIrVFi4u8tsW5At9yIfip9CXuE+CFMifZElAn0KIg2HfE3Hfk0FbjtvJbf/5UyLJqzwuo1qQreth3Bs8PR/T3Injgd3cZOXGAExw8F5lD/nHqtwUR5z/xG8v1ZLcHVqdVOg/SVfFkU33gE+7sNn/4PfGLDD6cldLrQhaf5bzbGucboK2W22c/yXDaCj+Px9y1G4Gn/+Vt+/3r7/8erPeRr/dR8rdNO/m+L+Wv3/99p/vX7/92n5bzG8NbdEEmKEkpa/XDEQ9aa/rJlzGhE6nyjxStEgBdwK8n+fbeelNDv5KDSLXpQiulSCTiFO5qCizBM/QTDl3Fk7vtPWvB/rwB05aiZKGScfSLKWTlQ7mHhVe8fjaxJONQWecfTzUohBhmUAyxWvp4JNkja3eyl/l6/51K5jBGZaJQFRRZlHYGWc6t+Y05aGNdiPij8H2HZxnUS9e2vzz5FEy0rFqmIfhJu3bG5ebQiJZp/HweFXN0O5vBAcVSumIOxIUVRJYF/ocq+HAk7cXuugpdmwZy2muWTeleVW69O2GSd404EbbMMGvgv3W0b9q/P0A9V+6P7h4uwH+hKRqeNnz4/p5P3W8KTtaM7cacCRzTgu3yGMY18tekp4H6cwQJPDSKkOZIhYWJAMjQDMPgS5IEWXKXQD+SFNgF2SNUpY2Q+xdN4Dy+ug98PI7xILKgtkIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

