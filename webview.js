module.exports = (Franz) => {
  // Trigger beta site display
  // This can be removed after beta site deploys
  if(document.cookie.indexOf('use_eatthismuch_beta_2018=1') == -1) {
    var expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1);
    document.cookie = "use_eatthismuch_beta_2018=1; domain=www.eatthismuch.com; path=/; expires=" + expiryDate;
    location.reload();
  }
};