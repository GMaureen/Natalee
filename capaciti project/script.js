function generateStory() {
    const topic = document.getElementById('topic').value;
    const character = document.getElementById('character').value;
    const tone = document.getElementById('tone').value;

    // Simple story generation logic
    let story = "";

    if (tone === "adventurous") {
        story = `Once upon a time, in a land filled with ${topic}, there lived a brave hero named ${character}. Together, they embarked on an epic adventure to conquer the challenges of the ${topic}.`;
    } else if (tone === "humorous") {
        story = `In a world of ${topic}, ${character} tried to be a hero but ended up tripping over their own feet! Every attempt to save the day turned into a hilarious disaster.`;
    } else if (tone === "dramatic") {
        story = `In the shadowy realm of ${topic}, ${character} faced a heart-wrenching decision that would determine the fate of their world. The stakes were high, and the tension was palpable.`;

    } else {
        story = "Please enter a valid tone.";
    }

    document.getElementById('story').innerText = story;
}