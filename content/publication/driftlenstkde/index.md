---
title: "Unsupervised Concept Drift Detection from Deep Learning Representations in Real-time"
authors:
- Salvatore Greco
- Bartolomeo Vacchetti
- Daniele Apiletti
- Tania Cerquitelli

date: "2024-09-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-09-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Concept Drift is a phenomenon in which the underlying data distribution and statistical properties of a target domain change over time, leading to a degradation of the model's performance. Consequently, models deployed in production require continuous monitoring through drift detection techniques. Most drift detection methods to date are supervised, i.e., based on ground-truth labels. However, true labels are usually not available in many real-world scenarios. Although recent efforts have been made to develop unsupervised methods, they often lack the required accuracy, have a complexity that makes real-time implementation in production environments difficult, or are unable to effectively characterize drift. To address these challenges, we propose DriftLens, an unsupervised real-time concept drift detection framework. It works on unstructured data by exploiting the distribution distances of deep learning representations. DriftLens can also provide drift characterization by analyzing each label separately. A comprehensive experimental evaluation is presented with multiple deep learning classifiers for text, image, and speech. Results show that (i) DriftLens performs better than previous methods in detecting drift in 11/13 use cases; (ii) it runs at least 5 times faster; (iii) its detected drift value is very coherent with the amount of drift (correlation ); (iv) it is robust to parameter changes.

# Summary. An optional shortened abstract.
summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
- Large Language Models

featured: true

links:
- name: Custom Link
  url: http://example.org
url_pdf: http://arxiv.org/pdf/1512.04133v1
url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
url_dataset: '#'
url_poster: '#'
url_project: ''
url_slides: ''
url_source: '#'
url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

This work is driven by the results in my [previous paper](/publication/conference-paper/) on LLMs.

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
