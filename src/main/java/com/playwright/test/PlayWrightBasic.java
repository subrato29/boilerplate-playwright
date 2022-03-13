package com.playwright.test;

import com.microsoft.playwright.*;

public class PlayWrightBasic {

	public static void main(String[] args) {
		Playwright pw = Playwright.create ();
		Browser browser = pw.chromium().launch();
		Page page = browser.newPage();
		page.navigate("https://www.automationexercise.com/");
		
		String title = page.title();
		System.out.println("Page title is: " + title);
		
		String url = page.url();
		System.out.println("url title is: " + url);
		
		browser.close();
		pw.close();
	}

}
