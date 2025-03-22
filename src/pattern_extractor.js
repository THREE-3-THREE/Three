// pattern_extractor.js
// 🔍 Scans text for mysterious "trinary" patterns — nothing is coincidence.

const fs = require('fs');

// Utility to count occurrences of words
function countOccurrences(text) {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const counts = {};
    words.forEach(word => {
        counts[word] = (counts[word] || 0) + 1;
    });
    return counts;
}

// Detect patterns where something repeats exactly 3 times
function extractTrinaryPatterns(text) {
    const results = [];

    const counts = countOccurrences(text);
    for (let [word, count] of Object.entries(counts)) {
        if (count === 3) {
            results.push({ word, count });
        }
    }

    // Detect repeated 3-letter sequences
    const triples = text.match(/\b\w{3}\b/g) || [];
    const tripleFreq = {};
    triples.forEach(trip => {
        tripleFreq[trip] = (tripleFreq[trip] || 0) + 1;
    });

    const suspiciousTriples = Object.entries(tripleFreq).filter(([_, count]) => count >= 3);

    return {
        exactTripleWords: results,
        repeatedThreeLetterWords: suspiciousTriples
    };
}

// Entry point: read a file or sample string
function analyzeFile(filePath) {
    try {
        const text = fs.readFileSync(filePath, 'utf8');
        const patterns = extractTrinaryPatterns(text);

        console.log("🔍 Trinary Pattern Report:");
        console.log("==========================");

        console.log("\n🧠 Words repeated exactly 3 times:");
        patterns.exactTripleWords.forEach(entry =>
            console.log(`- ${entry.word} (3x)`)
        );

        console.log("\n🧠 3-letter words repeated 3+ times:");
        patterns.repeatedThreeLetterWords.forEach(([word, count]) =>
            console.log(`- ${word} (${count}x)`)
        );

        console.log("\n🛑 If you see too many, it’s not coincidence. It’s design.");
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

// Usage: node pattern_extractor.js file.txt
if (require.main === module) {
    const inputFile = process.argv[2];
    if (!inputFile) {
        console.error("Usage: node pattern_extractor.js <file.txt>");
        process.exit(1);
    }
    analyzeFile(inputFile);
}

module.exports = { extractTrinaryPatterns };
