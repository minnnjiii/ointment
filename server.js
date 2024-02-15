const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


// views 디렉토리를 정적 파일로 제공
app.use(express.static('views'));

// ejs를 view 엔진으로 사용
app.set('view engine', 'ejs');

// "/" 주소로 접속시 index.ejs 파일을 보여줌
app.get('/', (req, res) => {
    res.render('index', {});
});


// port 열어주기
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view the website.`);
});
