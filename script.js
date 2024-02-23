const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is the first reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is the first reply to a first reply to the first comment",
              parentId: 2,
              replies: [
                {
                    id: 5,
                    text: "This is the first reply to a first reply to a first reply to the first comment",
                    parentId: 3,
                    replies: [],
                },
                {
                    id: 6,
                    text: "This is the second reply to a first reply to a first reply to the first comment",
                    parentId: 3,
                    replies: [],
                }
              ]
            }
          ]
        },
        {
            id: 7,
            text: "This is the second reply to the first comment",
            parentId: 2,
            replies: [],
        }
      ]
    },
    {
      id: 4,
      text: "This is the second comment",
      parentId: null,
      replies: []
    },
];


const commentsContainer = document.getElementById('comments-container');

function create(comment, num) {
    const div = document.createElement('div');
    div.className = 'comment';
    div.textContent = comment.text;

    if (comment.replies.length > 0) {
        comment.replies.forEach(reply => {
            const rply = create(reply, num + 1);
            div.appendChild(rply);
        });
    }
    return div;
}

function show(arr) {
    arr.forEach(comment => {
        if (comment.parentId === null) {
        const cmnt = create(comment, 0);
        commentsContainer.appendChild(cmnt);
        }
    });
}

show(comments);


