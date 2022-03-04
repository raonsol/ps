# 없어진 기록 찾기
select o.ANIMAL_ID, o.NAME from ANIMAL_OUTS as o
LEFT JOIN ANIMAL_INS as i on o.ANIMAL_ID=i.ANIMAL_ID
where i.ANIMAL_ID is NULL;

# 있었는데요 없었습니다
select i.ANIMAL_ID, i.NAME from ANIMAL_OUTS as o
join ANIMAL_INS as i on o.ANIMAL_ID=i.ANIMAL_ID
where o.DATETIME<i.DATETIME
order by i.datetime;

# 오랜 기간 보호한 동물(1)
select i.NAME, i.DATETIME from ANIMAL_INS as i
left join ANIMAL_OUTS as o on i.ANIMAL_ID=o.ANIMAL_ID
where o.ANIMAL_ID is NULL
order by i.DATETIME limit 3;

# 보호소에서 중성화한 동물
select i.ANIMAL_ID, i.ANIMAL_TYPE, i.NAME from ANIMAL_INS as i
join ANIMAL_OUTS as o on i.ANIMAL_ID=o.ANIMAL_ID
where i.SEX_UPON_INTAKE not regexp ('Spayed|Neutered')
and o.SEX_UPON_OUTCOME regexp ('Spayed|Neutered')
order by i.ANIMAL_ID;