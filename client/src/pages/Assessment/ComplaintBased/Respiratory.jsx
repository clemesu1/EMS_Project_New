import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRespiratory, toggleBreathListItem } from '../../../features/respiratory';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Slider, Stack, TextField, Typography } from '@mui/material';

const breathSoundChecksII = ['Wheezes', 'Crackles', 'Right Apex', 'Left Apex', 'Right Base', 'Left Base', 'Other'];

const marks = [
	{
		value: 0,
		label: '0',
	},
	{
		value: 10,
		label: '10',
	},
];

const Respiratory = () => {
	let dispatch = useDispatch();
	let respiratory = useSelector(state => state.respiratory);

	const [painScale, setPainScale] = useState(respiratory.Pain_Scale);

	const handleChange = (name, value) => dispatch(setRespiratory({ name, value }));

	return (
		<Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
			<Grid item xs={12} md={4} lg={3}>
				<Stack spacing={3}>
					<Paper variant="outlined" sx={{ width: 1, p: 2, m: 'auto', flexGrow: 1 }}>
						<FormControl>
							<FormLabel id="level-of-distress-radio-group">Level of Distress</FormLabel>
							<RadioGroup
								aria-labelledby="level-of-distress-radio-group"
								name="Level_of_distress"
								value={respiratory.Level_of_distress}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
							>
								<FormControlLabel value="Mild" control={<Radio />} label="Mild" />
								<FormControlLabel value="Moderate" control={<Radio />} label="Moderate" />
								<FormControlLabel value="Severe" control={<Radio />} label="Severe" />
							</RadioGroup>
						</FormControl>
					</Paper>
					<FormControl fullWidth size="small" sx={{ display: { xs: 'none', lg: 'flex' } }}>
						<InputLabel id="coughing-label">Coughing</InputLabel>
						<Select
							labelId="coughing-label"
							id="coughing"
							label="Coughing"
							defaultValue=""
							value={respiratory.Coughing}
							onChange={(e) => handleChange('Coughing', e.target.value)}
						>
							<MenuItem value="No cough">No cough</MenuItem>
							<MenuItem value="Productive (with phlegm)">Productive (with phlegm)</MenuItem>
							<MenuItem value="Non-productive (no phlegm)">Non-productive (no phlegm)</MenuItem>
							<MenuItem value="Not noted">Not noted</MenuItem>
						</Select>
					</FormControl>
				</Stack>
			</Grid>
			<Grid item xs={12} md={8} lg={6}>
				<Paper variant="outlined" sx={{ p: 2, m: 'auto', flexGrow: 1 }}>
					<Typography color="textSecondary" gutterBottom>Breath Sound Checks</Typography>
					<Grid container spacing={3}>
						<Grid item xs={6} md={4}>
							<FormControl>
								<RadioGroup
									name="Breath_sound_I"
									value={respiratory.Breath_sound_I}
									onChange={(e) => handleChange(e.target.name, e.target.value)}
								>
									<FormControlLabel value="Equal" control={<Radio />} label="Equal" />
									<FormControlLabel value="Clear" control={<Radio />} label="Clear" />
									<FormControlLabel value="Unequal" control={<Radio />} label="Unequal" />
									<FormControlLabel value="Noisy" control={<Radio />} label="Noisy" />
								</RadioGroup>
							</FormControl>
						</Grid>
						<Grid item xs={6} md={8}>
							<FormControl component="fieldset">
								<FormGroup row>
									{breathSoundChecksII.map((item, index) => (
										<FormControlLabel
											key={index}
											label={item}
											control={
												<Checkbox
													checked={respiratory.Breath_sound_II.indexOf(item) !== -1}
													onChange={() => dispatch(toggleBreathListItem(item))}
												/>
											}
										/>
									))}
								</FormGroup>
							</FormControl>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12} md={6} lg={3}>
				<Stack spacing={3}>
					<TextField
						id="pre-ems-medication"
						label="Pre-EMS Medication"
						multiline
						maxRows={2}
						fullWidth
						size="small"
						value={respiratory.PreEMS_Medication}
						onChange={(e) => handleChange('PreEMS_Medication', e.target.value)}
					/>
					<Paper variant="outlined" sx={{ p: 2, m: 'auto', flexGrow: 1 }}>
						<FormControl>
							<FormLabel id="response-to-medic-radio-group">Response to Pre-EMS Med</FormLabel>
							<RadioGroup
								aria-labelledby="response-to-medic-radio-group"
								name="Response_to_Medic"
								value={respiratory.Response_to_Medic}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
							>
								<FormControlLabel value="Improved" control={<Radio />} label="Improved" />
								<FormControlLabel value="Unchanged" control={<Radio />} label="Unchanged" />
								<FormControlLabel value="Deteriorated" control={<Radio />} label="Deteriorated" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Stack>
			</Grid>
			<Grid item xs={12} md={6}>
				<Stack spacing={3}>
					<FormControl fullWidth size="small" sx={{ display: { xs: 'flex', lg: 'none' } }}>
						<InputLabel id="coughing-label">Coughing</InputLabel>
						<Select
							labelId="coughing-label"
							id="coughing"
							label="Coughing"
							defaultValue=""
							value={respiratory.Coughing}
							onChange={(e) => handleChange('Coughing', e.target.value)}
						>
							<MenuItem value="No cough">No cough</MenuItem>
							<MenuItem value="Productive (with phlegm)">Productive (with phlegm)</MenuItem>
							<MenuItem value="Non-productive (no phlegm)">Non-productive (no phlegm)</MenuItem>
							<MenuItem value="Not noted">Not noted</MenuItem>
						</Select>
					</FormControl>
					<Stack textAlign="center" sx={{ display: { xs: 'flex', lg: 'none' } }}>
						<Typography id="pain-scale-label" variant="overline" gutterBottom>Pain Scale</Typography>
						<Slider
							aria-labelledby="pain-scale-label"
							id="pain-scale"
							defaultValue={0}
							valueLabelDisplay="auto"
							step={1}
							marks={marks}
							min={0}
							max={10}
							value={painScale}
							onChange={(event, value) => setPainScale(value)}
							onChangeCommitted={() => handleChange('Pain_Scale', painScale)}
						/>
					</Stack>
				</Stack>
			</Grid>
			<Grid item container spacing={3} xs={12} lg={10}>
				<Grid item xs={6} lg={4}>
					<Paper variant="outlined" sx={{ width: 1, p: 2, m: 'auto', flexGrow: 1 }}>
						<FormControl>
							<FormLabel id="tobacco-radio-group">Tobacco</FormLabel>
							<RadioGroup
								aria-labelledby="tobacco-radio-group"
								name="Tobacco"
								value={respiratory.Tobacco}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
								<FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={6} lg={4}>
					<Paper variant="outlined" sx={{ width: 1, p: 2, m: 'auto', flexGrow: 1 }}>
						<FormControl>
							<FormLabel id="allerg-exposure-radio-group">Allergen Exposure</FormLabel>
							<RadioGroup
								aria-labelledby="allerg-exposure-radio-group"
								name="Allerg_Exposure"
								value={respiratory.Allerg_Exposure}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
								<FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={6} lg={4}>
					<Paper variant="outlined" sx={{ width: 1, p: 2, m: 'auto', flexGrow: 1 }}>
						<FormControl>
							<FormLabel id="medication-admin-radio-group">Medication Administered</FormLabel>
							<RadioGroup
								aria-labelledby="medication-admin-radio-group"
								name="Medication_Admin"
								value={respiratory.Medication_Admin}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
								<FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={6} lg={4}>
					<Paper variant="outlined" sx={{ width: 1, p: 2, m: 'auto', flexGrow: 1 }}>
						<FormControl>
							<FormLabel id="jvd-radio-group">JVD</FormLabel>
							<RadioGroup
								aria-labelledby="jvd-radio-group"
								name="JVD"
								value={respiratory.JVD}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
								<FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={6} lg={4}>
					<Paper variant="outlined" sx={{ width: 1, p: 2, m: 'auto', flexGrow: 1 }}>
						<FormControl>
							<FormLabel id="periph-edema-radio-group">Peripheral Edema</FormLabel>
							<RadioGroup
								aria-labelledby="periph-edema-radio-group"
								name="Periph_Edema"
								value={respiratory.Periph_Edema}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
								<FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={6} lg={4}>
					<Paper variant="outlined" sx={{ width: 1, p: 2, m: 'auto', flexGrow: 1 }}>
						<FormControl>
							<FormLabel id="acc-mus-use-radio-group">Accessory Muscle Use</FormLabel>
							<RadioGroup
								aria-labelledby="acc-mus-use-radio-group"
								name="Acc_Mus_Use"
								value={respiratory.Acc_Mus_Use}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
								<FormControlLabel value="Unknown" control={<Radio />} label="Unknown" />
							</RadioGroup>
						</FormControl>
					</Paper>
				</Grid>
			</Grid>
			<Grid item xs={12} lg={2} sx={{ display: { xs: 'none', lg: 'block' } }}>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={1}
					sx={{ height: '100%' }}
				>
					<Typography id="pain-scale-label" variant="overline" gutterBottom>Pain Scale</Typography>
					<Slider
						aria-labelledby="pain-scale-label"
						id="pain-scale"
						sx={{
							'& input[type="range"]': {
								WebkitAppearance: 'slider-vertical',
							},
						}}
						orientation="vertical"
						defaultValue={0}
						valueLabelDisplay="auto"
						step={1}
						marks={marks}
						min={0}
						max={10}
						value={painScale}
						onChange={(event, value) => setPainScale(value)}
						onChangeCommitted={() => handleChange('Pain_Scale', painScale)}
					/>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default Respiratory;
