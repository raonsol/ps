# 루시와 엘라 찾기
select ANIMAL_ID, NAME, SEX_UPON_INTAKE from ANIMAL_INS
where NAME in ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty');

# 이름에 el이 들어가는 동물 찾기
select ANIMAL_ID, NAME from ANIMAL_INS
where NAME like "%el%" and animal_type='Dog' order by NAME;

# 중성화 여부 파악하기
select ANIMAL_ID, NAME,
if(SEX_UPON_INTAKE like '%Neutered%' or
SEX_UPON_INTAKE like '%Spayed%', 'O', 'X') as 중성화
from ANIMAL_INS order by ANIMAL_ID;