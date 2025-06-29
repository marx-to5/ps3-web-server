const express = require('express');
const app = express();

app.get('*', (req, res) => {
  console.log('طلب من اللعبة:', req.url);
  res.send('🟢 الاتصال ناجح من PS3! (رد وهمي من السيرفر)');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Fake PS3 Server يعمل على المنفذ ${port}`);
});
