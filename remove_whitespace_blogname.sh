for entry in '_posts'/*; do
  safe_filename=$(echo $entry | sed 's/\s/_/g')
  if [ "$entry" != "$safe_filename" ]; then
    mv "$entry" "$safe_filename"
  fi
done