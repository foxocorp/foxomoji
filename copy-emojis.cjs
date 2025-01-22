const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
    fs.mkdirSync(to, { recursive: true });
    fs.readdirSync(from).forEach(element => {
        const fromPath = path.join(from, element);
        const toPath = path.join(to, element);
        if (fs.lstatSync(fromPath).isFile()) {
            fs.copyFileSync(fromPath, toPath);
        } else {
            copyFolderSync(fromPath, toPath);
        }
    });
}

const srcDir64 = path.join(__dirname, 'emoji-64');
const destDir64 = path.join(__dirname, 'dist', 'emoji-64');
copyFolderSync(srcDir64, destDir64);

const srcDir160 = path.join(__dirname, 'emoji-160');
const destDir160 = path.join(__dirname, 'dist', 'emoji-160');
copyFolderSync(srcDir160, destDir160);