"use client"

const Contact = () => {
    return (
        <div>
            <h1>コンタクト</h1>
            <form>
                <input type="text" placeholder="お名前" required/>
                <input type="text" placeholder="メールアドレス" required/>
                <textarea type="text" placeholder="メッセージ" rows="10" required></textarea>
                <button type="submit">送信</button>
            </form> 
        </div>
    )
}

export default Contact