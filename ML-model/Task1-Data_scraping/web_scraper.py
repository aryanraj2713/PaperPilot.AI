import csv
import requests
from bs4 import BeautifulSoup

def scrape_ieee(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    articles = soup.find_all('div', {'class': 'List-results-item'})
    with open('papers.csv', 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['Title', 'Authors', 'Abstract', 'Publication Date'])
        #
        #
        # Write your code here

        for article in articles:
            title = article.find('h2', {'class': 'title'}).text.strip()
            authors = article.find('p', {'class': 'authors'}).text.strip()

            abstract = article.find('div', {'class': 'description'}).text.strip()

            date = article.find('span', {'class': 'pub-type'}).text.strip()
            writer.writerow([title, authors, abstract, date])

url = 'https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=research+papers'
#url = 'https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=computer+science'


scrape_ieee(url)
