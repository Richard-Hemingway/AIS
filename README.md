# AIS
 An Athlete Information Service for Finals Commentators.

AIS offers a simple single page app which can be used to display information from the ISSF Athlete Database, Wikipedia and other sources such as national player databases for convenient viewing by commentators. The default websites can be trivially changed for other sports on lines 45 & 46 of *app.js*.

AIS generates a 2x4 layout, offering infoboxes for 8 finallists. Boxes can be toggled off as finallists are eliminated (or if they do not have profiles available), leaving more space for remaining information. It should work reasonably with a monitor offering 1920x1080 resolution.

Unfortunately the ISSF does not offer a public API for their athlete feed, so the remote pages are loaded in iframes. Because the app will be holding 16-24 pages in iframes it is recommended that a dedicated device is used, or else one with plenty of RAM.

AIS can be run locally with no need for a server - just download the .zip, unpack it into a folder and open *index.html* in your preferred browser. Obviously an internet connection will be required to load the remote resources.