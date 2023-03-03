function submitResults(form) {
  const words = form.textarea.value.split(' ').length
  const stars = form.stars.value
  const email = form.email.value
  alert('You wrote ' + words + ' words of feedback, rated ' + stars + ' stars, and gave the email address: ' + email)
}