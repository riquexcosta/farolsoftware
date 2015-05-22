def page_title
  title = "Farol - Fábrica de Software" #Set site title here

  if data.page.title
    title = data.page.title + " — " + title
  end

  title
end

def page_description
  description = "Conheça os serviços que nós oferecemos!" # Set site description here

  if data.page.description
    description = data.page.description
  end

  description
end

def page_keywords
  keywords = ['apps', 'website', 'site', 'mobile', 'seo', 'responsive'] # Set site keywords here ['keyword-a', 'keyword-b']

  if data.page.keywords
    keywords.concat(data.page.keywords)
  end

  keywords.uniq.join(", ")
end

def page_author
  author = "Henrique Costa" #Set site author name here

  if data.page.author
    author = data.page.author
  end

  author
end
