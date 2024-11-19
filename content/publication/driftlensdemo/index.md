---
title: 'DriftLens: A Concept Drift Detection Tool'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Salvatore Greco
  - Bartolomeo Vacchetti
  - Daniele Apitelli
  - Tania Cerquitelli

# Author notes (optional)
author_notes:
  - ''
  - ''

date: '2024-07-01T00:00:00Z'
doi: '10.1145/3686924'

# Schedule page publish date (NOT publication's date).
publishDate: '2024-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Proceedings of the ACM on Human-Computer Interaction, Volume 8, Issue CSCW2
publication_short: EDBT Demo Track

abstract: Concept drift refers to changes in data distribution over time that can lead to performance degradation of deep learning systems. Production models need to be continuously monitored for drift. Detecting concept drift poses significant challenges for deep classifiers working with unstructured data, especially when the true labels for new samples are not available and the data has high dimensionality. In such scenarios, drift detection must be approached using unsupervised methods. This paper presents the demo of a tool that uses an effective unsupervised drift detection technique for deep classifiers on unstructured data, namely DriftLens. The tool enables users to i) experiment with different controlled drift patterns on multiple preloaded text and image classifiers and ii) detect possible drifts on new models and data streams. The recorded demo of the tool, available at https://youtu. be/1R2igFhMD8U, shows how end users can interact with DriftLens and use it to continuously monitor models for concept and data drift.

# Summary. An optional shortened abstract.
summary: A webtool application employing the DriftLens methodology for pre- or user-uploaded use cases.

tags:
  - Concept Drift
  - Data Drift
  - Robusteness
  - Unsupervised Concept Drift Detection
  - NLP
  - Computer Vision

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://openproceedings.org/2024/conf/edbt/paper-239.pdf'
url_code: 'https://github.com/grecosalvatore/DriftLensDemo'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=1R2igFhMD8U&t=1s'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

{{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
