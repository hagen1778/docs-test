---
sort: 6
---

# VMbackup

`vmbackup` creates VictoriaMetrics data backups from [instant snapshots](https://victoriametrics.github.io/Single-server-VictoriaMetrics.html#how-to-work-with-snapshots).

Supported storage systems for backups:

* [GCS](https://cloud.google.com/storage/). Example: `gcs://<bucket>/<path/to/backup>`
* [S3](https://aws.amazon.com/s3/). Example: `s3://<bucket>/<path/to/backup>`
* Any S3-compatible storage such as [MinIO](https://github.com/minio/minio), [Ceph](https://docs.ceph.com/docs/mimic/radosgw/s3/) or [Swift](https://www.swiftstack.com/docs/admin/middleware/s3_middleware.html). See [these docs](#advanced-usage) for details.
* Local filesystem. Example: `fs://</absolute/path/to/backup>`

`vmbackup` supports incremental and full backups. Incremental backups created automatically if the destination path already contains data from the previous backup.
Full backups can be sped up with `-origin` pointing to already existing backup on the same remote storage. In this case `vmbackup` makes server-side copy for the shared
data between the existing backup and new backup. It saves time and costs on data transfer.

Backup process can be interrupted at any time. It is automatically resumed from the interruption point when restarting `vmbackup` with the same args.

Backed up data can be restored with [vmrestore](https://victoriametrics.github.io/vmrestore.html).

See [this article](https://medium.com/@valyala/speeding-up-backups-for-big-time-series-databases-533c1a927883) for more details.

See also [vmbackupmanager](https://github.com/VictoriaMetrics/VictoriaMetrics/issues/466) tool built on top of `vmbackup`. This tool simplifies
creation of hourly, daily, weekly and monthly backups.