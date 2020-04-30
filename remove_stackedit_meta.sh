for entry in `ls _posts`; do
    echo _posts/$entry
    sed -i ':a;N;$!ba;s/<!--stackedit_data:.*-->//g' _posts/$entry
done