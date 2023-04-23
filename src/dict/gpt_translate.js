/* global api */
class gpt_translate {
  constructor(options) {
      this.options = options;
      this.maxexample = 2;
      this.word = '';
  }

  async displayName() {
      return 'opengpt3.5';
  }


  setOptions(options) {
      this.options = options;
      this.maxexample = options.maxexample;
  }

  async findTerm(word) {
    this.word = word;
    if (!word) return null;
    try {
        return await Promise.resolve(this.findChatGpt(word));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  removeTags(elem, name) {
      let tags = elem.querySelectorAll(name);
      tags.forEach(x => {
          x.outerHTML = '';
      });
  }

  renderCSS() {
    let css = `
        <style>
        span.eg,
        span.exp,
        span.cara
        {display:block;}
        .cara {color: #1C6FB8;font-weight: bold;}
        .eg {color: #238E68;}
        #phrase I {color: #009933;font-weight: bold;}
        span.cet  {margin: 0 3px;padding: 0 3px;font-weight: normal;font-size: 0.8em;color: white;background-color: #5cb85c;border-radius: 3px;}
        </style>`;

    return css;
}

  async findChatGpt(word) {
      let notes = [];
      // 定义翻译函数

      // 调用翻译函数
      const targetLanguage = 'zh-CN';
      let translatedText = '';
      try {
        let data = await api.chatGpt(word);
        translatedText = data.choices[0].message.content.trim();
      } catch(err) {
        console.error(err);
      }
      
      let css = this.renderCSS();
      notes.push({
          css,
          // expression,
          // reading,
          // extrainfo,
          definitions: [translatedText],
          // audios
      });
      return notes;
  }
  
}
