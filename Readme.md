# steps to create mfe.

Designate one app as Host and one as remote.
In the remote decide which modules you want to make available to other projects.
Setup module federation plugin to expose those files.
In Host, decide which files you want to get from the remote.
Setup module federation to fetch those files.
In the Host, refactor the entry point to load asynchronously.
In the Host, import whatever files you need from the remote.

In the current repo, parent app is container which holds products and cart app together..
