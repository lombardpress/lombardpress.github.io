---
layout: post
title:  Early data visualizations from the Sentences Commentary Text Archive
date:   2015-04-24
permalink: /early-data-visualizations-from-the-sentences-commentary-text-archive/
tags: depreciated
---

I've recently created some simple bar graphs to illustrate the ultimate potential of the Sentences Commentary Text Archive. (View graphs here: [http://stats.scta.info](http://stats.scta.info)). Besides coordinating the reuse of individual transcriptions, the Sentences Commentary Text Archive can allow us to analyze the entire tradition with accurate metrics for the first time.

The graphs visible at [http://stats.scta.info](http://stats.scta.info) build dynamically. When you load them, you are actually querying the SCTA database and a javascript library (d3.js) is rebuilding the visualization. This means these graphs update in real time. Whenever the database updates, the graphs will adjust and display the latest information.

At the present, the information they display is fairly simple. They display the frequency of mentions of various names, according to various categories (Classical, Biblical, Scholastic, Patristic, and All). There is also a graph that shows the frequency of the use of distinct quotations. When you hover over a particular bar, you will get a link to the current metadata about that item contained in the archive.

These kinds of visualizations are only the tip of the iceberg. As the database progresses and indexes more commentaries and transcriptions, we will be able to (and in many cases already can) build more specific visualizations for particular authors or particular sections of a commentary throughout the entire tradition. For example, instead of looking for the frequency of certain names or quotations throughout the entire tradition, we might look for metrics relevant to Prologues only. Further, we might filter this information by authors living after 1300 or by authors who were Dominicans, Franciscans, etc.

Please leave comments here if you have thoughts or suggestions. Likewise, if you would like to request particular kinds of frequency visualizations, let me know and I'll see what I can do.
