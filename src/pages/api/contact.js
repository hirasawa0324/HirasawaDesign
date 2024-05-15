import nodemailer from 'nodemailer';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let { name, email, message } = req.body;

        // サニタイズ処理
        name = DOMPurify.sanitize(name);
        email = DOMPurify.sanitize(email);
        message = DOMPurify.sanitize(message);

        // 簡易なバリデーションチェック
        if (!name || !email || !message || !validateEmail(email)) {
            res.status(400).json({ error: '不正な入力があります。' });
            return;
        }

        // Nodemailerの設定
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // メールの内容
        const mailOptions = {
            from: email,
            to: process.env.MY_EMAIL,
            subject: `Contact form submission from ${name}`,
            text: message,
            html: `<p><strong>お名前:</strong> ${name}</p>
                   <p><strong>メールアドレス:</strong> ${email}</p>
                   <p><strong>メッセージ:</strong></p>
                   <p>${message}</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'メール送信に失敗しました。' });
        }
    } else {
        res.status(405).json({ error: 'このメソッドは許可されていません。' });
    }
}

// メールアドレスのバリデーション関数
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
