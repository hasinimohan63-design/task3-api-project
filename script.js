async function getJoke() {
  const output = document.getElementById("output");
  output.textContent = "Loading...";

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    output.textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    output.textContent = "Something went wrong. Please try again.";
  }
}
