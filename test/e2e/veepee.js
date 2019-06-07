var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Access to Veepee': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/authentication/portal/FR')
      .waitForElementVisible('body', 5000) 
      browser.end(); 
  },
  
  'Check block login': function (browser) {
    browser
      .url('https://secure.fr.vente-privee.com/authentication/portal/FR')
      .waitForElementVisible('body', 5000) 
    browser.expect.element('#txtEmail').to.be.an('input')
    browser.expect.element('#txtPassword').to.be.an('input')
    browser.expect.element('#btSubmit').to.be.an('input')
    browser.expect.element('#signUpLink').to.be.an('a')
    browser.end(); 
  },
  
  'Register page': function (browser) {
    browser
      .resizeWindow(1280, 800)
      .url('https://secure.fr.vente-privee.com/authentication/portal/FR')
      .waitForElementVisible('body', 5000) 
      .waitForElementPresent('#signUpLink',5000) 
      .click('#signUpLink')
      .waitForElementVisible('body',5000)
      //.assert.urlEquals('https://secure.fr.vente-privee.com/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
    
    browser.end(); 
  },
  
  'Field `Nom` must exist': function (browser) {
    browser
      .resizeWindow(1280, 800)
      .url('https://secure.fr.vente-privee.com/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
      .waitForElementVisible('body', 5000) 
      .waitForElementPresent("#txtLastName",5000)     
    browser.end(); 
  },
  
  'Field `Prenom` must exist': function (browser) {
    browser
      .resizeWindow(1280, 800)
      .url('https://secure.fr.vente-privee.com/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
      .waitForElementVisible('body', 5000) 
      .waitForElementPresent("#txtFirstName",5000)     
    browser.end(); 
  },
  
  'Field `Email` must exist': function (browser) {
    browser
      .resizeWindow(1280, 800)
      .url('https://secure.fr.vente-privee.com/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
      .waitForElementVisible('body', 5000) 
      .waitForElementPresent("#txtMail",5000)     
    browser.end(); 
  },
  
  'Field `Password` must exist': function (browser) {
    browser
      .resizeWindow(1280, 800)
      .url('https://secure.fr.vente-privee.com/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
      .waitForElementVisible('body', 5000) 
      .waitForElementPresent("#txtPassword",5000)     
    browser.end(); 
  },
  
  'Checkbox Legal aggrement must exist ': function (browser) {
    browser
      .resizeWindow(1280, 800)
      .url('https://secure.fr.vente-privee.com/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
      .waitForElementVisible('body', 5000) 
      .waitForElementPresent("#ckbInvitMailPartner",5000)     
    browser.end(); 
  },
  
  'Button Cest Parti must exist ': function (browser) {
    browser
      .resizeWindow(1280, 800)
      .url('https://secure.fr.vente-privee.com/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
      .waitForElementVisible('body', 5000) 
      .waitForElementPresent("#registerBt",5000)     
    browser.end(); 
  },
  
  'Register pass ': function (browser) {
    browser
      .resizeWindow(1280, 800)
      .url('https://secure.fr.vente-privee.com/registration/registration?CountryCodeUser=FR&accessButtonText=Inscrivez-vous%20maintenant%20!')
      .waitForElementVisible('body', 5000) 
      .waitForElementPresent("#registerBt",5000)
      .waitForElementPresent("#ckbInvitMailPartner",5000)     
      .waitForElementPresent("#txtPassword",5000) 
      .waitForElementPresent("#txtMail",5000)
      .waitForElementPresent("#txtFirstName",5000) 
      .waitForElementPresent("#txtLastName",5000) 
      .setValue("#txtLastName", "monnom")
      .setValue("#txtFirstName", "monprenom")
      .setValue("#txtMail", "monmail@gmail.com")
      .setValue("#txtPassword", "monmdp");
      browser.click("#rbtCivility_1");
      browser.click("#registerBt");

    browser.end(); 
  }



};
