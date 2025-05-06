document.getElementById('chatBtn').onclick = () => {
  document.getElementById('chatModal').style.display = 'block';
};

document.getElementById('closeModal').onclick = () => {
  document.getElementById('chatModal').style.display = 'none';
};

document.getElementById('userInput').onkeypress = async (e) => {
  if (e.key === 'Enter') {
    const input = e.target.value;
    const res = await fetch('https://your-render-backend.onrender.com/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();
    document.getElementById('chatWindow').innerHTML += `<p><strong>Вы:</strong> ${input}</p>`;
    document.getElementById('chatWindow').innerHTML += `<p><strong>GPT:</strong> ${data.reply}</p>`;
    e.target.value = '';
  }
};
