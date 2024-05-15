import { format } from 'date-fns';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
// import 'highlight.js/styles/a11y-dark.css';

import 'highlight.js/styles/hybrid.css';


export const formatDate = (date) => {
    const utcDate = new Date(date); // UTCの日時を取得
    // 日本はUTC+9時間なので、ミリ秒単位でオフセットを計算
    const offset = utcDate.getTimezoneOffset() * 60000; // getTimezoneOffsetは分単位のUTCからのオフセットを返す
    const jstDate = new Date(utcDate.getTime() + offset + (9*60*60*1000)); // UTCからJSTへ変換
    return format(jstDate, 'yyyy/M/d'); // 「2024年 3月 10日」のように日付をフォーマット
  };

export const formatRichText = (richText) => {
  const $ = cheerio.load(richText);
  $('h3').addClass('text-xl font-bold mt-4 mb-2'); // 例としてh1, h2, h3にクラスを適用
  $('h2').addClass('text-xl font-bold mt-4 pt-2 mb-7  border-b border-gray-2'); // 例としてh1, h2, h3にクラスを適用
  $('h1').addClass('text-xl font-bold mt-20 px-4 py-2 mb-7 bg-gray-100'); // 例としてh1, h2, h3にクラスを適用
  $('p').addClass('mb-4'); // 段落にマージンボトムを追加
  $('li').addClass(''); // 段落にマージンボトムを追加
  const highlight = (text, lang) => {
    if (!lang) return hljs.highlightAuto(text);
    try {
      return hljs.highlight(text, { language: lang.replace(/^language-/, '') || '' });
    } catch (e) {
      return hljs.highlightAuto(text);
    }
  };
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class');
    const res = highlight($(elm).text(), lang);
    $(elm).html(res.value);

  });

  return $.html();
};

