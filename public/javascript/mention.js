$(document).ready(function() {
  let users = []
  
  $.get('/api/user', function(data) {
    users = data.Followings
  })

  $('.text-form').on('keyup', function(e) {
    let text = $(this).val()
    if (text.includes('@')) {
      $('.mention-lookup-nt').show()
      let query = text.split('@').pop()
      let matches = users.filter(user => 
        user.name.toLowerCase().includes(query.toLowerCase())
      )
      
      $('.mention-lookup-nt').html(
        matches.map(user => `
          <div class="mention-item" data-username="${user.name}">
            @${user.name}
          </div>
        `).join('')
      )
    } else {
      $('.mention-lookup-nt').hide()
    }
  })

  $(document).on('click', '.mention-item', function() {
    let username = $(this).data('username')
    let text = $('.text-form').val()
    text = text.replace(/@\w*$/, `@${username} `)
    $('.text-form').val(text)
    $('.mention-lookup-nt').hide()
  })
})

