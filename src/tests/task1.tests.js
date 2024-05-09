describe('Task 1', () => {
    before(async() => {
        await browser.url("https://pastebin.com")
        await $('a.sign-in').click()
        await $('input#loginform-username').setValue('Epam-user')
        await $('input#loginform-password').setValue('epam_test_12345')
        await $('button.btn').click()
        expect(await $('div.info-top h1').getText()).toHaveText("Epam-user's Pastebin") 
    })
    
    it('creating new paste', async () => { 
        await $('a.header__btn').click()
        await $('textarea#postform-text').setValue('Hello from WebDriver')
        await $('span#select2-postform-expiration-container').click()
        await $('//li[contains(text(),"10 Minutes")]').click()
        await $('input#postform-name').setValue('helloweb')
        await $('//button[text()="Create New Paste"]').click()
    
        expect(await $('div.info-top h1').getText()).toEqual('helloweb')
        expect(await $('textarea.textarea').getText()).toEqual('Hello from WebDriver')
        expect(await $('div.source').getText()).toEqual('Hello from WebDriver')
    })
})
