const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', updateCounts);

function updateCounts() {
    // Get the text and trim whitespace 
    const text =  textInput.value;

    // charayer Count 
    const characters = text.length;
    charCount.textContent = characters;

    // Word Count (split by white space and filter empty strings)
    const words = text.trim().split(/\s+/);
    wordCount.textContent = text.trim() === '' ? 0 : words.length;
    
}