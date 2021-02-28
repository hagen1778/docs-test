---
sort: 7
---

# VMrestore

`vmrestore` restores data from backups created by [vmbackup](https://victoriametrics.github.io/vbackup.html).
VictoriaMetrics `v1.29.0` and newer versions must be used for working with the restored data.

Restore process can be interrupted at any time. It is automatically resumed from the interruption point
when restarting `vmrestore` with the same args.ly, daily, weekly and monthly backups.