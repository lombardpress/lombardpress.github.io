---
layout: post
title:  Witness to Bonaventure's Commentary on the Sentences added to the SCTA Image Viewer.
date:   2015-05-17
permalink: /witness-to-bonaventures-commentary-on-the-sentences-added-to-the-scta-image-viewer/
tags: depreciated
---

Today, I added Harvard's Ms. Lat 265 to the SCTA Image Viewer. This manuscript is a witness to Book II of St. Bonaventure's Commentary on the Sentences of Peter Lombard. It can be viewed here:

[http://images.scta.info/?json=5558b135e4b0d557cf926137](http://images.scta.info/?json=5558b135e4b0d557cf926137)

The ease with which this manuscript was added to the SCTA Image collection is a testament to the power of IIIF.

I found the manuscript here [http://pds.lib.harvard.edu/pds/view/24332177](http://pds.lib.harvard.edu/pds/view/24332177). Then I identified the prepared IIIF manifest here: [http://iiif.lib.harvard.edu/manifests/drs:24332177](http://iiif.lib.harvard.edu/manifests/drs:24332177).

All that was left was to add this to the index.html file of my mirador viewer like so:

    $(function() {Mirador({
        "id": "viewer",
        "layout": "1x1",
        "data": [
            ...
            {"manifestUri": "http://iiif.lib.harvard.edu/manifests/drs:24332177"}
        ]

and voilà, the 28th manuscript has been added to the collection.

<iframe src="http://images.scta.info/" width="100%" height="400"></iframe>
