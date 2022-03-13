package com.playwright.test;

import com.microsoft.playwright.*;
import com.microsoft.playwright.BrowserType.LaunchOptions;

public class PlayWrightBasic {

	public static void main(String[] args) {
		Playwright pw = Playwright.create ();
		LaunchOptions lp = new LaunchOptions ();
		lp.setChannel("chrome");
		lp.setHeadless(false);
		Browser browser = pw.chromium().launch(lp);
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
