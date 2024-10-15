#!/bin/bash

# Pindah ke direktori repo (otomatis berubah sesuai lokasi script)
cd "$(dirname "$0")"

# Mengecek apakah ada perubahan
if git diff-index --quiet HEAD --; then
    echo "Tidak ada perubahan untuk di-commit"
else
    # Menambahkan semua perubahan
    git add .

    # Membuat commit otomatis dengan timestamp
    git commit -m " commit on $(date '+%Y-%m-%d %H:%M:%S')"

    # Push ke remote (GitHub)
    git push origin main
fi
