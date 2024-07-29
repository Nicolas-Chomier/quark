// pages/button-test.tsx
'use client';
import React from 'react';
import styles from '../page.module.css';
import { Table } from '@/lib/src/components/table/Table';

export default function TableTest() {
	return (
		<div className={styles.container}>
			<div>
				<div style={{ width: '100%', backgroundColor: 'red' }}>
					<h1>Table</h1>
					<Table data={testData} allowSelection={1}></Table>
				</div>
			</div>
		</div>
	);
}
const testData = [
	{
		id: 1,
		name: 'Alice Johnson',
		age: 28,
		department: 'Marketing',
	},
	{
		id: 2,
		name: 'Bob Smith',
		age: 35,
		department: 'Finance',
	},
	{
		id: 3,
		name: 'Carol Williams',
		age: 42,
		department: 'HR',
	},
	{
		id: 4,
		name: 'David Brown',
		age: 31,
		department: 'IT',
	},
	{
		id: 5,
		name: 'Eve Davis',
		age: 39,
		department: 'Sales',
	},
	{
		id: 6,
		name: 'Frank Miller',
		age: 45,
		department: 'Operations',
	},
	{
		id: 7,
		name: 'Grace Wilson',
		age: 33,
		department: 'Marketing',
	},
	{
		id: 8,
		name: 'Henry Taylor',
		age: 29,
		department: 'Finance',
	},
	{
		id: 9,
		name: 'Ivy Anderson',
		age: 37,
		department: 'HR',
	},
	{
		id: 10,
		name: 'Jack Thomas',
		age: 41,
		department: 'IT',
	},
];
