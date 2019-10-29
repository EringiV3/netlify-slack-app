exports.handler = function(event, context, callbask) {
  const response = {
    "text": "おすすめの泣けるアニメ",
    "attachments": [
      {
        "text": "CLANNAD AFTER STORY"
      },
      {
        "text": "ヴァイオレット・エヴァーガーデン"
      }
    ]
  }

  callbask(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(response)
  })
}