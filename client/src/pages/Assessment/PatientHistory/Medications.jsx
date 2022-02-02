import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientHistory, toggleMedicationListItem } from '../../../features/patientHistory';
import { Checkbox, Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material';
import { FixedSizeList } from 'react-window';

const medications = ["Accupril", "Acebutolol", "Acetaminophen", "Adalat", "Advil", "Albuterol", "Allopurinol", "Alprazolam", "Altace", "Amitriptyline", "Amoxillin Amoxil", "Anaprox", "ASA", "Atenolol", "Ativan", "Atropine", "Bactrim", "Beclovent", "Benedryl", "Benylin", "Biaxin", "Captopril", "Cardizem", "Cialis", "Cimetidine", "Cipro", "Claritin", "Claritin", "Claritromycin", "Clonazepam", "Codeine", "Colace", "Coumadin",
	"Demerol", "Diabeta", "Diazepam", "Digoxin", "Dilantin", "Dilaudid", "Diltiazem", "Diphenhydramine", "EffexorErythromycin", "Endocet", "Ferrous sulphate", "Flonase", "Flovent", "Folic acid", "Furosemide", "Glucagon", "Glucophge", "Glyburide", "GLyburide", "Haldol", "Hmulin N", "Humulin R", "Hydrochlorothiazide", "Hydromorphone", "Ibuprofen", "Imodium", "Inderal", "Insulin", "Ipratropium", "Isoptin", "Keflex", "Lanoxin",
	"Lasix", "Levitra", "Lipitor", "Lopressor", "Lorazepam", "Losec", "Meperidine", "Metformin", "Methodone", "Metoprolol", "Minitran", "Morphine Sulphate", "Naprosyn", "Naproxen", "Naproxen", "Nasonex", "Nifedipine", "Nitroglycerin", "Oxazepam", "Oxycodone", "Oxycontin", "Paxil", "Penicillin", "Percocet", "Phenobarbital", "Phenobarbital", "Plavax", "Potassium Chloride", "Prednisone", "Premarin", "Prevacid", "Prilosex", "Procainamide",
	"Propranolol", "Pseudoephedrine", "Pulmicort", "Quinapril", "Quinidine", "Ramipril", "Ramipril", "Ranitidine", "Risperdal", "Salbutamol", "Slow-K", "Sudafed", "Synthroid", "Tagamet", "Tagamet", "Talwin", "Tegretol", "Tylenol", "Valium", "Vasotec", "Vasotec", "Ventolin", "Verapamil", "Verapamil", "Versed", "Viagra", "Warfarin", "Wellbutrin", "Xanax", "Xanax", "Zantac", "Zestril", "Zithromax", "Zoloft"];


const Medications = () => {
	let dispatch = useDispatch();
	let patientHistory = useSelector(state => state.patientHistory);

	const handleChange = (name, value) => dispatch(setPatientHistory({ name, value }));

	function renderRow(props) {
		const { index, style } = props;

		const item = medications[index];
		const labelId = `drug-list-label-${item}`;

		return (
			<ListItem style={style} key={index} component="div" dense disablePadding>
				<ListItemButton role={undefined} onClick={() => dispatch(toggleMedicationListItem(item))}>
					<ListItemIcon>
						<Checkbox
							edge="start"
							checked={patientHistory.Med_Name.indexOf(item) !== -1}
							tabIndex={-1}
							disableRipple
							inputProps={{ 'aria-labelledby': labelId }}
						/>
					</ListItemIcon>
					<ListItemText id={labelId} primary={item} />
				</ListItemButton>
			</ListItem>
		);
	}

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h6">Medications (select all that are applicable)</Typography>
			</Grid>
			<Grid item xs={12} lg={6}>
				<Paper variant="outlined" sx={{ width: '100%' }}>
					<FixedSizeList
						height={450}
						width="100%"
						itemSize={46}
						itemCount={medications.length}
						overscanCount={5}
					>
						{renderRow}
					</FixedSizeList>
				</Paper>

			</Grid>
			<Grid item xs={12} lg={6}>
				<TextField
					label="Other / Comments"
					size="small"
					fullWidth
					multiline
					rows={19}
					sx={{ display: { xs: 'none', lg: 'block' }, width: '100%', height: '100%' }}
					value={patientHistory.Med_Others}
					onChange={(e) => handleChange('Med_Others', e.target.value)}
				/>
				<TextField
					label="Other"
					size="small"
					fullWidth
					multiline
					maxRows={19}
					sx={{ display: { xs: 'block', lg: 'none' }, width: '100%', height: '100%' }}
					value={patientHistory.Med_Others}
					onChange={(e) => handleChange('Med_Others', e.target.value)}
				/>
			</Grid>
		</Grid>
	);
};

export default Medications;
