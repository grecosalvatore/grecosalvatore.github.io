---
title: "Trusting deep learning natural-language models via local and global explanations"
authors:
- Francesco Ventura
- Salvatore Greco
- Daniele Apiletti
- Tania Cerquitelli

author_notes:
- "Equal contribution"
- "Equal contribution"
date: "2015-09-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "Knowledge and Information Systems"
publication_short: "KAIS"

abstract: Despite the high accuracy offered by state-of-the-art deep natural-language models (e.g., LSTM, BERT), their application in real-life settings is still widely limited, as they behave like a black-box to the end-user. Hence, explainability is rapidly becoming a fundamental requirement of future-generation data-driven systems based on deep-learning approaches. Several attempts to fulfill the existing gap between accuracy and interpretability have been made. However, robust and specialized eXplainable Artificial Intelligence solutions, tailored to deep natural-language models, are still missing. We propose a new framework, named T-EBAnO, which provides innovative prediction-local and class-based model-global explanation strategies tailored to deep learning natural-language models. Given a deep NLP model and the textual input data, T-EBAnO provides an objective, human-readable, domain-specific assessment of the reasons behind the automatic decision-making process. Specifically, the framework extracts sets of interpretable features mining the inner knowledge of the model. Then, it quantifies the influence of each feature during the prediction process by exploiting the normalized Perturbation Influence Relation index at the local level and the novel Global Absolute Influence and Global Relative Influence indexes at the global level. The effectiveness and the quality of the local and global explanations obtained with T-EBAnO are proved on an extensive set of experiments addressing different tasks, such as a sentiment-analysis task performed by a fine-tuned BERT model and a toxic-comment classification task performed by an LSTM model. The quality of the explanations proposed by T-EBAnO, and, specifically, the correlation between the influence index and human judgment, has been evaluated by humans in a survey with more than 4000 judgments. To prove the generality of T-EBAnO and its model/task-independent methodology, experiments with other models (ALBERT, ULMFit) on popular public datasets (Ag News and Cola) are also discussed in detail.

# Summary. An optional shortened abstract.
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Source Themes
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: http://arxiv.org/pdf/1512.04133v1
url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
