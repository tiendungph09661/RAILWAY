const API_BASE = "https://web-production-dbc45.up.railway.app";

async function search() {
  const merchant_email = document.getElementById("email").value;

  const res = await fetch(`${API_BASE}/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ merchant_email })
  });

  const data = await res.json();
  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach(mail => {
    const li = document.createElement("li");
    li.innerHTML = `
      <b>${mail.subject}</b><br/>
      <button onclick="resend('${mail.id}')">Resend</button>
    `;
    list.appendChild(li);
  });
}

async function resend(email_id) {
  const merchant_email = document.getElementById("email").value;

  await fetch(`${API_BASE}/resend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email_id, merchant_email })
  });

  alert("✅ Đã gửi lại email");
}