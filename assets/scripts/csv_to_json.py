import os
import csv
import json
from datetime import datetime

data_dir = os.path.join(os.path.dirname(__file__), os.pardir, 'data')
date_format = '%d/%m/%Y'

def csv_reader():
	for filename in os.listdir(data_dir):
		if filename.endswith(".csv"):
			with open(os.path.join(data_dir, filename)) as csv_file:
				yield csv.DictReader(csv_file)


def add_birtdays(rows, dob):
	today = datetime.today()
	date = datetime.strptime(dob, date_format)
	date = date.replace(date.year + 1)
	age = 1

	while (date < today):
		rows.append({'start_date': date.strftime(date_format), 'end_date': '','type': 'event', 'what': age,'where': '','how': ''})
		date = date.replace(date.year + 1)
		age += 1


rows = []
for file in csv_reader():
	for row in file:
		rows.append(row)

		if row['type'] == 'event' and row['what'] == 'born':
			add_birtdays(rows, row['start_date'])

with open(os.path.join(data_dir, 'resume.json'), 'w') as json_file:
    json.dump(rows, json_file)