// Socket.ioをインポート
import io from 'socket.io-client';

// サーバーに接続
const socket = io('http://localhost:3000');

// メッセージを送信する関数
function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value;
  // メッセージを送信
  socket.emit('message', message);
  input.value = '';
}

// 送信ボタンをクリックしたときにメッセージを送信
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);

// Enterキーを押したときにもメッセージを送信
const messageInput = document.getElementById('message-input');
messageInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    sendMessage();
  }
});

// メッセージを受信したときに表示する関数
function showMessage(message) {
  const messages = document.getElementById('messages');
  const li = document.createElement('li');
  li.textContent = message;
  messages.appendChild(li);
}

// サーバーからのメッセージを受信
socket.on('message', showMessage);
